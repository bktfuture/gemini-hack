from datetime import datetime, date, time, timezone
from icalendar import Event, Calendar, vCalAddress
from fastapi import FastAPI, APIRouter, Response
from fastapi.responses import RedirectResponse, JSONResponse

from starlette.requests import Request

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

from api.models.user import User

router = APIRouter()

CLIENT_SECRETS_FILE = './api/oauth/client_secret.json'
SCOPES = ['https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
          'openid',
          'https://www.googleapis.com/auth/calendar']


# OAuth Login Stuff
@router.get('/login')
async def login(request: Request):

    # Create OAuth Flow
    flow = Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE,
        scopes=SCOPES
    )
    flow.redirect_uri = 'http://127.0.0.1:8000/api/v1/glogin/callback'        # Page that Google should redirect to after signin

    # Create Google authorization url to send user to
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true'
    )

    request.session['state'] = state
    return RedirectResponse(authorization_url)


@router.get('/callback')
async def callback(request: Request):
    state = request.session['state']

    # Recreate OAuth Flow w/ state
    flow = Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        state=state
    )
    flow.redirect_uri = 'http://127.0.0.1:8000/api/v1/glogin/callback'                # Page that Google should redirect to after signin
    auth_response = 'https://redirectmeto.com/' + str(request.url)      # Workaround for localhost, regular request.url should work if it includes https

    # Trade authorized_response for access token
    flow.fetch_token(authorization_response=auth_response)

    # Retrieve credentials and store in session
    creds = flow.credentials
    request.session['creds'] = {
        'token': creds.token,
        'refresh_token': creds.refresh_token,
        'token_uri': creds.token_uri,
        'client_id': creds.client_id,
        'client_secret': creds.client_secret,
        'scopes': creds.scopes
    }
    return RedirectResponse(request.url_for('success'))


# Page after Google OAuth Callback complete
@router.get('/success')
async def success(request: Request):

    # Get and store user info
    creds = get_session_creds(request)

    # Use OAuth2 service to get user email
    userinfo_request = build('oauth2', 'v2', credentials=creds)
    temp_user = userinfo_request.userinfo().get().execute()

    userinfo = {
        'first_name': temp_user['given_name'],
        'last_name': temp_user['family_name'],
        'email': temp_user['email'],
        'google_oauth_id': temp_user['id'],
    }

    # userinfo = User(
    #     first_name=temp_user['given_name'],
    #     last_name=temp_user['family_name'],
    #     email=temp_user['email'],
    #     google_oauth_id=temp_user['id'],
    # )

    request.session['userinfo'] = userinfo

    create_event(request, userinfo)

    return {'message': 'Authorize Success!'}


@router.get('/userinfo_cookie/')
async def create_userinfo_cookie(request: Request, response: Response):
    userinfo = request.session['userinfo']
    response.set_cookie(key='email_cookie', value=userinfo['email'], secure=True)

    return {'message': 'Cookie saved'}  # Redirect back to old url?


def get_session_creds(request: Request):
    temp = request.session['creds']
    creds = Credentials(
        token=temp['token'],
        refresh_token=temp['refresh_token'],
        token_uri=temp['token_uri'],
        client_id=temp['client_id'],
        client_secret=temp['client_secret'],
        scopes=temp['scopes'])
    return creds


# Event + Google Calendar Stuff
def create_event(request: Request, user: dict):
    # Call when you are sending an event automatically to a user's Google Calendar
    # Need to log in with Google

    creds = get_session_creds(request)

    # Use Calendar API to build and create event
    calendar = build('calendar', 'v3', credentials=creds)
    event = {
        'summary': 'Gemini Hackathon Due Date',
        'location': 'website',
        'description': 'hello world',
        'start': {
            'dateTime': '2024-05-03T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },
        'end': {
            'dateTime': '2024-05-03T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60 * 7},    # Email user 1 week before Deadline
                {'method': 'popup', 'minutes': 24 * 60},        # Popup 1 day before deadline
            ],
        },
    }
    event_list = [event, event]

    # Create Event in Calendar of user email
    event = calendar.events().insert(calendarId=user['email'], body=event).execute()
    print('Event created: %s' % (event.get('htmlLink')))

def get_event_list():
    # Get list of deadlines from tasks somehow?
    pass

def create_ics_file(event_list: list, user: dict):
    cal = Calendar()

    for event in event_list:
        ics_event = create_ics_event(event=event, user=user)
        cal.add_component(ics_event)

    file_name = str(datetime.now()) + '.ics'
    with open(file_name, 'wb') as file:
        file.write(cal.to_ical())


def create_ics_event(event: dict, user: dict):

    ics_event = Event()
    ics_event.add('summary', event['summary'])
    ics_event.add('dtstart', event['start']['dateTime'])
    ics_event.add('dtend', event['end']['dateTime'])

    organizer = vCalAddress(user['email'])
    organizer.params['name'] = f'{user["first_name"]} {user["last_name"]}'

    ics_event['organizer'] = organizer
    ics_event['location'] = 'www.website'

    return ics_event


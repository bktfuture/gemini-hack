from datetime import datetime
from icalendar import Event, Calendar, vCalAddress
from fastapi import APIRouter, Response
from fastapi.responses import RedirectResponse

from starlette.requests import Request

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

from api.models.user import User
from api.database import engine

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

    flow.redirect_uri = 'http://127.0.0.1:8000/api/v1/glogin/callback'        # Google redirects to after signin

    # Create Google authorization url to send user to
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true'
    )

    request.session['state'] = state
    return RedirectResponse(authorization_url)


# Page after Google OAuth Callback complete
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


# Store Userinfo
@router.get('/success')
async def success(request: Request, response: Response):

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

    # Store user in database
    user = User(
        username=temp_user['email'],
        first_name=temp_user['given_name'],
        last_name=temp_user['family_name'],
        email=temp_user['email'],
        google_oauth_id=temp_user['id'],
    )

    await engine.save(user)

    # Store userinfo into session + username into cookies
    request.session['userinfo'] = userinfo
    create_userinfo_cookie(userinfo['first_name'], response)

    return RedirectResponse('http://localhost:3000/dashboard')


def create_userinfo_cookie(username: str, response: Response):
    response.set_cookie(key='username_cookie', value=username, secure=True)
    # return {'message': 'Cookie saved'}


@router.get('/get_username_cookie')
async def get_username_cookie(request: Request):
    cookie = request.cookies.get('username_cookie')
    return cookie


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
@router.get('/create_event')
async def create_event(request: Request):

    # Need to log in with Google
    try:
        user = request.session['userinfo']
        creds = get_session_creds(request)

        # Use Calendar API to build and create event
        calendar = build('calendar', 'v3', credentials=creds)

        # College App - colorId=1
        # FAFSA - colorId=2
        # VISA - colorId=4

        name = 'Portland State University'
        url = 'https://www.pdx.edu/'
        event = make_google_event(
            deadline='2024-05-02',
            summary=f'{name} Application Deadline',
            location=url,
            colorId='1'
        )
        event = calendar.events().insert(calendarId=user['email'], body=event).execute()
        print('Event created: %s' % (event.get('htmlLink')))

        name = 'VISA'
        url = 'https://travel.state.gov/content/travel/en/us-visas.html'
        event = make_google_event(
            deadline='2024-05-03',
            summary=f'{name} Application Deadline',
            location=url,
            colorId='4'
        )
        event = calendar.events().insert(calendarId=user['email'], body=event).execute()
        print('Event created: %s' % (event.get('htmlLink')))

        name = 'FAFSA 2023-2024'
        url = 'https://studentaid.gov/h/apply-for-aid/fafsa'
        event = make_google_event(
            deadline='2024-05-04',
            summary=f'{name} Application Deadline',
            location=url,
            colorId='2'
        )
        event = calendar.events().insert(calendarId=user['email'], body=event).execute()
        print('Event created: %s' % (event.get('htmlLink')))

        return {'message': 'done'}
    except:
        print('ERROR - user not logged into Google')
        return RedirectResponse(request.url_for('login'))


def make_google_event(deadline: str, summary: str, location: str, colorId: str):
    event = {
        'colorId': colorId,
        'summary': summary,
        'location': location,
        'start': {
            'date': deadline,
        },
        'end': {
            'date': deadline,
        },
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60 * 7},  # Email user 1 week before Deadline
                {'method': 'popup', 'minutes': 24 * 60},  # Popup 1 day before deadline
            ],
        },
    }
    return event


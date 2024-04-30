function ifNotLandingOrSignInPage(pathname: string): boolean {
  if (pathname !== "/" && pathname !== "/signin") {
    return true;
  }
  return false;
}

export default ifNotLandingOrSignInPage;

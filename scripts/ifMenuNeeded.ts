function ifMenuNeeded(pathname: string): boolean {
  if (
    pathname !== "/" &&
    pathname !== "/signin" &&
    pathname !== "/createaccount"
  ) {
    return true;
  }
  return false;
}

export default ifMenuNeeded;

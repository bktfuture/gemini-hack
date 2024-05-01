function ifMenuNeeded(pathname: string): boolean {
  if (
    pathname !== "/" &&
    pathname !== "/signin" &&
    pathname !== "/createaccount" &&
    pathname !== "/createaccount/step1" &&
    pathname !== "/createaccount/step2" &&
    pathname !== "/createaccount/step3"
  ) {
    return true;
  }
  return false;
}

export default ifMenuNeeded;

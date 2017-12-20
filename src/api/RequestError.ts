export class RequestError extends Error {
  readonly status: number;
  readonly statusText: string;

  constructor(status : number, statusText: string) {
    super(`${status}: ${statusText}`);

    this.status = status;
    this.statusText = statusText;

    // Need to do this since Typescript broke instanceof checks when an object extend Error.
    // See: https://github.com/Microsoft/TypeScript/issues/13965
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default RequestError;

import { Report, Result } from '../types/api.types';

export function manageApiErrorResponse(errorResponse: any): Result<any> {
  if (errorResponse.response) {
    const { data: dataResponse, statusCode } = errorResponse.response;
    const { status, errors, success, message } = dataResponse as Result<any>;
    const responseError = {
      status,
      message,
      success,
      errors,
      statusCode: statusCode
    } as Result<any>;

    return responseError;
  }

  const erro: Report = JSON.parse(JSON.stringify(errorResponse));
  const responseError = {
    success: false,
    errors: [erro] as Report[],
    message: `${erro.name}: ${erro.message}`
  } as Result<any>;

  return responseError;
}

export function manageApiErrorMessages(errorResponse: Result<any>, ...namesToIgnore: string[]) {
  const errorMessages: string[] = [];
  const errors = errorResponse.errors;

  for (const error of errors) {
    if (namesToIgnore.includes(error.name)) continue;
    errorMessages.push(error.message);
  }

  return errorMessages;
}

export function getErrorMessage(errorResponse: Result<any>): string {
  const errorMessage = errorResponse.message;
  return errorMessage;
}

export function getFieldErrors(errorResponse: any): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  const errors = errorResponse?.response?.data?.errors;

  if (errors) {
    for (const report of errors) {
      const keyValue = fieldErrors[report.name];
      if (!keyValue) {
        fieldErrors[report.name] = report.message;
      }
    }
  }

  return fieldErrors;
}

export function getFieldErrorsInReport(reports: Report[]): any {
  const fieldErrors: Record<string, string> = {};

  if (reports) {
    for (const report of reports) {
      const keyValue = fieldErrors[report.name];
      if (!keyValue) {
        fieldErrors[report.name] = report.message;
      }
    }
  }

  return fieldErrors;
}

export const getErrorMessagesByName = (errorResponse: any, ...names: string[]) => {
  const reports: Report[] | undefined = errorResponse?.response?.data?.errors;

  const messages: string[] = [];
  if (reports) {
    for (const name of names) {
      const founded = reports.find((report) => report.name.includes(name));
      if (founded) {
        messages.push(founded.message);
      }
    }
  }

  return messages;
};

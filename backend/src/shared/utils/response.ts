export function success(data: any) {
  return {
    success: true,
    data,
  };
}

export function failure(message: string) {
  return {
    success: false,
    error: message,
  };
}
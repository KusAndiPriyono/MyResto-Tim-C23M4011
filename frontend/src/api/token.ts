class Token {
  static getToken() {
    return localStorage.getItem('token');
  }
  static setToken(resToken: any) {
    // localStorage.setItem('token', resToken);
    localStorage.setItem('token', resToken.token);
  }
  static removeToken() {
    localStorage.removeItem('token');
  }
}
export default Token;

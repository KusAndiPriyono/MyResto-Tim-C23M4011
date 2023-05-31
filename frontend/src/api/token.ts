class Token {
  static getToken() {
    return localStorage.getItem('token');
  }
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }
  static removeToken() {
    localStorage.removeItem('token');
  }
}
export default Token;

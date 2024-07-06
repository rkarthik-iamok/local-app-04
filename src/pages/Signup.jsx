import React, { useEffect } from "react";

function Signup() {
  useEffect(() => {
    window.location.href =
      "https://ciam-spoke02.karthiktc.com/oauth2/default/v1/authorize?client_id=0oac2qpybeHSxXr7T697&code_challenge=AptwK4s28Vrla9GDeSLhE9QEDT_p41ZihtfDKgeKU2A&code_challenge_method=S256&nonce=yuxWTTyxdoAd2RuPGxsPIkrevxnrYlhKjGq3Fdr34rgepSuCHRGiOhlPARa0H78K&redirect_uri=https%3A%2F%2Flocal-app-01.karthiktc.com%2Flogin%2Fcallback&response_type=code&state=qOvqq0XLGbIVpk1IZRoCkNC8JnxxBzzE02ZAd1FvnpkwGN5uQcWqYvUyL6UolXSK&acr_values=urn%3Aokta%3Aloa%3A1fa%3Apwd&scope=openid%20email%20profile%20offline_access&signup_page=true";
  }, []);

  return <div>Loading Signup... </div>;
}

export default Signup;

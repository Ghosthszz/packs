function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    function setPermissionCookie(permission) {
        document.cookie = "permission=" + permission + "; expires=session;";
    }

    if (email === 'Leonardo' && password === 'blk') {
        window.location.href = '/backend/paginas/Leonardo.html';
        setPermissionCookie('Leonardo');
        
    } else
    
    if (email === 'Gustavo' && password === 'Nathalia260576') {
        window.location.href = '/backend/paginas/ghosthszz.html';
        setPermissionCookie('ghosthszz');
    } else
    
    if (email === 'Thiago' && password === '1ahnes') {
        window.location.href = '/backend/paginas/Thiago.html';
        setPermissionCookie('thiago');
    } else
    
    {
      
      
      
      
  document.getElementById('error-msg').style.display = 'block';
    }
}


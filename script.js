
function toggleTheme(){
  const cur=document.documentElement.dataset.theme||'dark';
  const next=cur==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next;
  if(next==='light'){
    document.documentElement.style.setProperty('--bg','#f8fafc');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--txt','#0b1220');
    document.documentElement.style.setProperty('--muted','#4b5563');
    document.documentElement.style.setProperty('--chip','#eef2ff');
    document.documentElement.style.setProperty('--link','#1d4ed8');
  }else{
    location.reload();
  }
}

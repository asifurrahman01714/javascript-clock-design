function drawHands() {
    const now = new Date();
  
    const s_deg = now.getSeconds() * 6;
    $('.s').css('transform', `rotateZ(${s_deg}deg)`);
  
    const m_deg = now.getMinutes() * 6 + s_deg / 60;
    $('.m').css('transform', `rotateZ(${m_deg}deg)`);
  
    const h_deg = now.getHours() * 30 + m_deg / 12;
    $('.h').css('transform', `rotateZ(${h_deg}deg)`);
  
    setTimeout(drawHands, 1000);
  }
  
  $(function () {
    drawHands();
  });
  
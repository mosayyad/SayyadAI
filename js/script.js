// ... existing code remains the same ...

// Theme management
function changeTheme(themeName) {
  document.body.className = themeName + '-theme';
  localStorage.setItem('selectedTheme', themeName);
  document.querySelectorAll('.message').forEach(msg => {
    msg.style.animation = 'none';
    setTimeout(() => msg.style.animation = '', 10);
  });
}

function loadTheme() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
  changeTheme(savedTheme);
  document.getElementById('themeSelect').value = savedTheme;
}

// Export chat function
function exportChat() {
  const currentChat = chats.find(chat => chat.id === currentChatId);
  const chatContent = currentChat.messages.map(msg => 
    `${msg.role.toUpperCase()} [${new Date().toLocaleString()}]:\n${msg.content}\n${'-'.repeat(50)}`
  ).join('\n');

  const blob = new Blob([`SayyadAI Chat Export\n${'-'.repeat(30)}\n${chatContent}`], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SayyadAI-Chat-${currentChat.id.slice(-6)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// AI contact generation animation
function showContactAnimation() {
  const contactElement = document.createElement('div');
  contactElement.className = 'contact-animation';
  contactElement.innerHTML = `
    <svg viewBox="0 0 100 100" class="contact-spinner">
      <circle cx="50" cy="50" r="45" stroke="var(--accent-color)" stroke-width="4" fill="none" stroke-linecap="round">
        <animate attributeName="stroke-dashoffset" from="283" to="0" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-dasharray" values="283;95;283" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
    <div class="contact-text">Connecting to SayyadAI...</div>
  `;
  document.body.appendChild(contactElement);
  setTimeout(() => contactElement.remove(), 2000);
}

// Initialize theme on load
loadTheme();

// ... existing code remains the same ...
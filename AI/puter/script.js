// Deklarasi semua variabel tab dan konten
const tabVision = document.getElementById('tab-vision');
const tabTxt2Img = document.getElementById('tab-txt2img');
const tabChat = document.getElementById('tab-chat');
const contentVision = document.getElementById('content-vision');
const contentTxt2Img = document.getElementById('content-txt2img');
const contentChat = document.getElementById('content-chat');

// Chat elements
const chatMessagesDiv = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

// Riwayat chat
let chatHistory = [
    {
        role: 'system',
        content: 'Kamu wajib menggunakan bahasa indonesia, gen Z, kamu adalah asisten buatan muhammad rafli indrawan yang berkuliah S2 di UGM, kamu bernama Prabobot, kamu dibuat karna gabut gabut aja, kamu bisa jawab pertanyaan random, terinspirasi dari prabowo, dia jago bermain politik, selalu kaitkan semua dengan politik termasuk jokes politik'
    }
];

// Fungsi untuk mengatur tab aktif
function setActiveTab(tab) {
    // Sembunyikan semua konten dan nonaktifkan semua tab
    [contentVision, contentTxt2Img, contentChat].forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });
    [tabVision, tabTxt2Img, tabChat].forEach(tabBtn => {
        tabBtn.classList.remove('active');
    });

    // Pause webcam stream jika berpindah dari tab vision
    if (video.srcObject && tab !== 'vision') {
        video.pause();
    }

    // Aktifkan konten sesuai tab yang dipilih
    switch(tab) {
        case 'vision':
            tabVision.classList.add('active');
            contentVision.style.display = 'block';
            contentVision.classList.add('active');
            if (video.srcObject) {
                video.play();
            }
            break;
        case 'txt2img':
            tabTxt2Img.classList.add('active');
            contentTxt2Img.style.display = 'block';
            contentTxt2Img.classList.add('active');
            break;
        case 'chat':
            tabChat.classList.add('active');
            contentChat.style.display = 'block';
            contentChat.classList.add('active');
            break;
    }
}

// Event listener untuk tab
tabVision.onclick = () => setActiveTab('vision');
tabTxt2Img.onclick = () => setActiveTab('txt2img');
tabChat.onclick = () => setActiveTab('chat');

// Vision Webcam logic
const video = document.getElementById('webcam');
const snapshotImg = document.getElementById('snapshot');
const resultDiv = document.getElementById('result');
const captureBtn = document.getElementById('capture');
const canvas = document.createElement('canvas');
canvas.width = 320;
canvas.height = 240;

// Minta akses webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        alert('Tidak dapat mengakses webcam: ' + err);
    });

// Fungsi untuk mengambil dan mengirim foto
async function ambilDanKirimFoto() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    snapshotImg.src = dataUrl;
    
    // Show loading animation
    resultDiv.innerHTML = '<div class="loading-text"><div class="loading"></div>Mengirim ke LLM Vision...</div>';
    
    try {
        const jawaban = await puter.ai.chat(
            'Jelaskan isi gambar ini dalam bahasa Indonesia, gunakan bahasa gen z.',
            dataUrl
        );
        resultDiv.textContent = jawaban;
    } catch (e) {
        resultDiv.textContent = 'Terjadi kesalahan: ' + e;
    }
}

// Event listener untuk tombol capture
captureBtn.onclick = ambilDanKirimFoto;

// Text2Image logic
const txt2imgBtn = document.getElementById('txt2img-generate');
const txt2imgPrompt = document.getElementById('txt2img-prompt');
const txt2imgResult = document.getElementById('txt2img-result');

// Event listener untuk tombol generate
txt2imgBtn.onclick = () => {
    txt2imgResult.innerHTML = '<div class="loading-text"><div class="loading-big"></div><br>sedang Membuat gambar...</div>';
    
    puter.ai.txt2img(txt2imgPrompt.value, false).then((image) => {
        txt2imgResult.innerHTML = '';
        txt2imgResult.appendChild(image);
    }).catch(e => {
        txt2imgResult.innerHTML = 'Terjadi kesalahan: ' + e;
    });
};

// Chat logic
// Fungsi untuk menambahkan pesan ke tampilan chat
function addMessageToChat(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    messageDiv.textContent = message;
    chatMessagesDiv.appendChild(messageDiv);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

// Fungsi untuk menambahkan pesan loading ke chat
function addLoadingToChat() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message loading-message';
    loadingDiv.innerHTML = '<div class="loading"></div>Prabobot sedang berpikir...';
    loadingDiv.id = 'loading-message';
    chatMessagesDiv.appendChild(loadingDiv);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
    return loadingDiv;
}

// Fungsi untuk menghapus pesan loading
function removeLoadingFromChat() {
    const loadingMsg = document.getElementById('loading-message');
    if (loadingMsg) {
        loadingMsg.remove();
    }
}

// Fungsi untuk mengirim pesan
async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Tambahkan pesan user ke chat
    addMessageToChat(message, true);
    chatInput.value = '';

    // Tambahkan pesan ke riwayat
    chatHistory.push({
        role: 'user',
        content: message
    });

    // Tampilkan loading
    const loadingDiv = addLoadingToChat();

    try {
        // Kirim ke AI dan dapatkan respons
        const response = await puter.ai.chat(chatHistory);
        const aiMessage = response.message.content;
        
        // Hapus loading dan tambahkan respons AI
        removeLoadingFromChat();
        addMessageToChat(aiMessage);
        chatHistory.push({
            role: 'assistant',
            content: aiMessage
        });
    } catch (e) {
        removeLoadingFromChat();
        addMessageToChat('Maaf, terjadi kesalahan: ' + e.message);
    }
}

// Event listener untuk input chat
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 
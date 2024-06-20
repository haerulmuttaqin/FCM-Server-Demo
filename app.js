const admin = require('firebase-admin');
const registrationToken = 'f5JRGLiWQ4O_ukC49BS3dR:APA91bHLtMxBhvSiYjRT8DLV0fyVuLMkCF67XoNPfReZSAh1HxMm7dNaVk_j_nJxc4NwwRudPy0u65yd3EB5a3YR9Egoh6HOufWhpqyBzoBLcLmhBSF55IyTGrCiEuQF0DuSjE5KUT5r';

const serviceAccount = require('./sadix-sdo-1ja53d-77376ba8ffe9.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const message = {
    data: {
        title: 'New Notification',
        body: 'Hello, this is a test notification!'
    },
    token: registrationToken
};
admin.messaging().send(message)
    .then((response) => {
        console.log('Notification sent:', response);
    })
    .catch((error) => {
        console.error('Error sending notification:', error);
    });
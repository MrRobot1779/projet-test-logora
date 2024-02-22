//fichiers de tests unitaires


const axios = require('axios');

async function testPredict() {
    try {
        const response = await axios.post('http://localhost:3000/api/moderation/predict', {
            text: 'Test content',
            language: 'en',
        });

        console.log('Predict test passed:', response.data);
    } catch (error) {
        console.error('Predict test failed:', error.response.data);
    }
}

async function testScore() {
    try {
        const response = await axios.post('http://localhost:3000/api/moderation/score', {
            text: 'Test content',
            language: 'en',
        });

        console.log('Score test passed:', response.data);
    } catch (error) {
        console.error('Score test failed:', error.response.data);
    }
}

testPredict();
testScore();

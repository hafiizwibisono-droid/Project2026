pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t project2026:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f project2026 || true
                docker run -d \
                  --name project2026 \
                  -p 8080:8080 \
                  project2026:latest
                '''
            }
        }
    }
}

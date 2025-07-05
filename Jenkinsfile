pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                echo '🚀 Hello from Jenkins!'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Done') {
            steps {
                echo '✅ Build done!'
            }
        }
    }
}

pipeline {
    agent { docker { image 'python:3.10.1-alpine' } }
    stages {
        stage('Check Python Vers') {
            steps {
                sh 'python --version'
            }
        }
        stage('Print String') {
            steps {
				sh 'python -c \'print("hola")\''
            }
        }
    }
}

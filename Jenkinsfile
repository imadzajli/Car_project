pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONARQUBE_CREDENTIALS = 'sonar'  // Replace with the credential ID for SonarQube token in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Sonarqube') {  // Name given to SonarQube server in Jenkins
                    sh 'mvn clean verify sonar:sonar ' +
                       '-Dsonar.projectKey=your_project_key ' +
                       '-Dsonar.host.url=$SONARQUBE_URL ' +
                       '-Dsonar.login=$SONARQUBE_CREDENTIALS'
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}

pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://172.19.80.1:9000'
        SONARQUBE_CREDENTIALS = 'sonar-qube'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('test') {
            steps {
                echo "hello to sonar !!!!!"
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Sonarqube') {  // Name given to SonarQube server in Jenkins
                    bat 'mvn clean verify sonar:sonar ' +
                       '-Dsonar.projectKey=sonar ' +
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

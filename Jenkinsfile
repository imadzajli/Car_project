pipeline {
    agent any

    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONARQUBE_CREDENTIALS = 'sqp_66b89ba5efbf8f34a17ba74c0eca6633f9f464e4'  // Replace this with the ID of your SonarQube token in Jenkins
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
                withSonarQubeEnv('Sonarqube') {  // Make sure 'Sonarqube' is the correct name of the SonarQube server in Jenkins
                    bat '''
                        mvn clean verify sonar:sonar ^
                            -Dsonar.projectKey=sonar ^
                            -Dsonar.host.url=%SONARQUBE_URL% ^
                            -Dsonar.login=%SONARQUBE_CREDENTIALS%
                    '''
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

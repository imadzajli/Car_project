pipeline {
    agent any

    environment {
        SONARQUBE_SERVER = 'SonarQubeServer'  // Replace with your SonarQube server name in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your Git repository
                git url: 'https://github.com/imadzajli/S3_project.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                // Builds the project using Maven
                sh 'mvn clean install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    // Executes SonarQube analysis using Maven
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                // Waits for SonarQube Quality Gate results
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}

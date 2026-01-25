pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        script {
          echo "Hello from Jenkins!"
          sh 'ls -al'
        }
      }
    }
    stage('install') {
      steps {
        script {
          sh 'npm install'
          sh 'ls -al'
        }
      }
    }
    stage('build') {
      steps {
        script {
          sh 'npm run build'
          sh 'ls -al'
        }
      }
    }
  }
}

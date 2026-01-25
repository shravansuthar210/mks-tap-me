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
    stage('build-zip') {
      steps {
        script {
          sh 'zip -r build.zip build/ '
        }
      }
    }
    stage('upload-zip') {
      steps {
        script {
          sshagent(['deploy-ssh-key']) {
            sh '''
              scp build.zip shr@192.168.122.175:/home/shr/
              ssh shr@192.168.122.175 "unzip -o /home/shr/build.zip -d /var/www/my-react-app"
            '''
          }
        }
      }
    }
  }
}
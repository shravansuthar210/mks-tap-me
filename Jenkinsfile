pipeline {
  // agent {
  //   node {
  //     image 'node:20'
  //     label 'fedora-node'
  //     args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
  //   }
  // }
  agent {
    docker {
      image 'node:20'
      label 'fedora-node'
      // Allowing the container to talk to the host's Docker daemon
      args '-u root --privileged -v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('Test') {
      steps {
        script {
          echo "Hello from Jenkins!"
          sh 'ls -al'
        }
      }
    }
    stage('Install ') {
      steps {
        script {
          sh 'apt-get update && apt-get install -y zip unzip'      
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
          sh '''cd build
          zip -r ../build.zip . '''
        }
      }
    }
    stage('Prepare SSH') {
      steps {
        sh '''
          mkdir -p /root/.ssh
          touch /root/.ssh/known_hosts
          ssh-keyscan github.com >> /root/.ssh/known_hosts
        '''
      }
    }

    stage('upload-zip') {
      steps {
        script {
          sshagent(['deploy-ssh-key']) {
            sh '''
              ssh-keyscan -H 192.168.122.175 >> ~/.ssh/known_hosts
              scp build.zip shr@192.168.122.175:/home/shr/
              ssh shr@192.168.122.175 "unzip -o /home/shr/build.zip -d /var/www/my-react-app"
            '''
          }
        }
      }
    }
  }
}
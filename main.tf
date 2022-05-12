resource "aws_security_group" "application_server_sg" { # Create a security group
  name        = "application_server_sg"                 # Define the name of the security group
  description = "Application Server SG"                 # Define the description of the security group

  tags = {
    Name = "application_server_sg"
  }

  ingress {
    from_port   = 22            # Define the port number for the ingress rule
    to_port     = 22            # Define the port number for the ingress rule
    protocol    = "tcp"         # Define the protocol for the ingress rule
    cidr_blocks = ["0.0.0.0/0"] # Define the CIDR block for the ingress rule
  }

  ingress {
    from_port   = 80            # Define the port number for the ingress rule
    to_port     = 80            # Define the port number for the ingress rule
    protocol    = "tcp"         # Define the protocol for the ingress rule
    cidr_blocks = ["0.0.0.0/0"] # Define the CIDR block for the ingress rule
  }

  egress {
    from_port        = 0             # Define the port number for the egress rule
    to_port          = 0             # Define the port number for the egress rule
    protocol         = "-1"          # Create the security group rule with all ports open for egress
    cidr_blocks      = ["0.0.0.0/0"] # Allow all traffic
    ipv6_cidr_blocks = ["::/0"]      # Allow all IPv6 traffic
  }
}

resource "aws_instance" "application_server" {

  ami                    = data.aws_ami.amazon-linux-2.id                # Define the AMI ID
  instance_type          = var.instance_type                             # Define the instance type
  key_name               = var.key_name                                  # Define your existing key pair name
  vpc_security_group_ids = [aws_security_group.application_server_sg.id] # Define the security group ID
  depends_on             = [aws_security_group.application_server_sg]    # Wait for the security group to be created before creating the instance
  user_data              = file("user-data.sh")                          # Define the user data script

  tags = {
    Name = "Docker App Server" # Define the name of the instance
  }
}

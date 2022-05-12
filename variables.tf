variable "instance_type" {
  type    = string
  default = "t2.micro" # Define your instance type
}

variable "key_name" {
  type    = string
  default = "virginia" # Define your key pair name  
}

data "aws_ami" "amazon-linux-2" {
  most_recent = true       # Find the most recent AMI
  owners      = ["amazon"] # Find the AMI with the correct owner

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"] # Find the AMI with the correct name
  }

  filter {
    name   = "owner-alias"
    values = ["amazon"] # Find the AMI with the correct owner alias
  }
}

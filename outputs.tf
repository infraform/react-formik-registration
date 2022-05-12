output "server_public_ip" {
  value = "http://${aws_instance.application_server.public_ip}" # Define the output value
}

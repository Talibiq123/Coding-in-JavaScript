// Define the number of rows and columns
const rows = 4;
const columns = 4;

// Loop through rows
for (let i = 0; i < rows; i++) {
  // Loop through columns
  for (let j = 0; j < columns; j++) {
    // Print an asterisk
    process.stdout.write("*");
  }
  // Move to the next line after each row
  process.stdout.write("\n");
}

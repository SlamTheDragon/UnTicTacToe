const input = document.getElementById(
    'table',
  ) as HTMLInputElement | null;
  
  if (input != null) {
    console.log(input.value); // 👉️ "Initial Value"
  }
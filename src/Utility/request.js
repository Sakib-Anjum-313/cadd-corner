





export async function httpAddUser(data) {
  const response = await fetch(
    `https://cadd-corner-backend.coderslab.com.bd/api/v1/models/store`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
};


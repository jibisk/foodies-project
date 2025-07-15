import { flattenAttributes } from "./flatten";

export async function fetchData(endpoint) {
  const headers = {
    "Content-Type": "application/json",
  };

  //   if (authToken) {
  //     headers["Authorization"] = `Bearer ${authToken}`;
  //   }

  try {
    const response = await fetch(endpoint, { headers });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getAddress(ip = '8.8.8.8') {
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_lgKVw7tQCC4JzT8Sb0zQSit0YtaVA&ipAddress=${ip}`);

  return await response.json();
}

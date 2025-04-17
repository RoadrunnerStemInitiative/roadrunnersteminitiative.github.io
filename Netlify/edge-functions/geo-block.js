export default async (request, context) => {
  const country = context.geo?.country?.code || 'XX'; // e.g., 'US'

  // Block/redirect all non-US traffic
  if (country !== 'US') {
    return Response.redirect('/blocked.html', 302); // Redirect to your custom page
  }

  return await context.next();
};

export const config = { path: "/*" };

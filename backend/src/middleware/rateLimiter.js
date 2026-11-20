import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {
// we can rate limited per user or rate limit by the ip adress
  try {
    const {success} = await ratelimit.limit("my-limit-key") // we do not yet have authentication, so we will use a static key for now. In the future, we can use the user's IP address or user ID as the key.
    if (!success) {
      return res.status(429).json({ error: "Too many requests,please try again later"
      });
    }
    next();
  } catch (error) {
    console.error("Rate limit error", error);
    next(error)  }
  }

  export default rateLimiter;

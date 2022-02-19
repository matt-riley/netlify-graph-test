// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type DailyTotal = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for npm queries
     */
    npm: {
      /**
       * Overall download stats in the npm ecosystem
       */
      downloads: {
        /**
         * The download status for all of npm over the last day
         */
        lastDay: {
          /**
           * The download stats for all over npm for the given range. Check out explanation of how [npm download counts work](http://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts), including "what counts as a download?"
           */
          count: number;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchDailyTotal(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<DailyTotal>;

export type WeeklyTotal = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for npm queries
     */
    npm: {
      /**
       * Overall download stats in the npm ecosystem
       */
      downloads: {
        /**
         * The download status for all of npm over the last week
         */
        lastWeek: {
          /**
           * The download stats for all over npm for the given range. Check out explanation of how [npm download counts work](http://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts), including "what counts as a download?"
           */
          count: number;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An empty query to start from
 */
export function fetchWeeklyTotal(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<WeeklyTotal>;

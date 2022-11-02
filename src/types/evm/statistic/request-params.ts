import { RangeType, SortDirection } from '../../nftscan-type';

/**
 * The request parameters of EVM API 'getTradeRanking'
 */
export interface QueryTradeRankingParams {
  /**
   * The time range (15m 30m 1h 6h 12h 1d 7d 30d). 1d for default
   */
  time?:
    | RangeType.M15
    | RangeType.M30
    | RangeType.H1
    | RangeType.H6
    | RangeType.H12
    | RangeType.D1
    | RangeType.D7
    | RangeType.D30;

  /**
   * Can be volume or sales. volume for default
   */
  sort_field?: 'volume' | 'sales';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;

  /**
   * Whether to load 7-day trend data of the collection. false for default
   */
  show_7d_trends?: boolean;
}

/**
 * The request parameters of EVM API 'getCollectionRanking'
 */
export interface QueryCollectionRankingParams {
  /**
   * Can be volume_1d, volume_7d, volume_30d, volume_total, volume_change_1d, volume_change_7d, floor_price. volume_1d for default
   */
  sort_field?:
    | 'volume_1d'
    | 'volume_7d'
    | 'volume_30d'
    | 'volume_total'
    | 'volume_change_1d'
    | 'volume_change_7d'
    | 'floor_price';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;

  /**
   * Result size. Defaults to 20, capped at 100
   */
  limit?: number;
}

/**
 * The request parameters of EVM API 'getMarketplaceRanking'
 */
export interface QueryMarketplaceRankingParams {
  /**
   * The time range (1d 7d 30d all). 1d for default
   */
  time?: RangeType.D1 | RangeType.D7 | RangeType.D30 | RangeType.ALL;

  /**
   * Can be volume or sales or wallet. volume for default
   */
  sort_field?: 'volume' | 'sales' | 'wallet';

  /**
   * Can be asc or desc. desc for default
   */
  sort_direction?: SortDirection;
}

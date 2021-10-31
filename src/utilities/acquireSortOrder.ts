import { SortOrder, SortTypes } from '../types'

export function acquireSortOrder(sortBy:string):SortOrder {
  switch (sortBy) {
    case 'release_date' as SortTypes:
      return 'desc'
      case 'title' as SortTypes:
      return 'asc'
      case 'vote_average' as SortTypes:
      return 'desc'
    default: return 'asc'
  }
} 
// @flow
/**
 * Entire Redux State.
 */
export type ReduxState = {
  value: Base 
};

/**
 * Base level of Redux State.
 */
export type Base = {
  name: string,
  state: Slide[]
}

/**
 * Slide representation of Redux State.
 */
export type Slide = {
  id: string,
  parent?: string | null,
  slide?: string | null,
  link?: string | null
};
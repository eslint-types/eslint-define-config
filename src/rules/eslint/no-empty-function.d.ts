export interface Schema0 {
  allow?: (
    | 'functions'
    | 'arrowFunctions'
    | 'generatorFunctions'
    | 'methods'
    | 'generatorMethods'
    | 'getters'
    | 'setters'
    | 'constructors'
    | 'asyncFunctions'
    | 'asyncMethods'
  )[];
}

export type NoEmptyFunctionRuleOptions = [Schema0?];

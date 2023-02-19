/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    decimal<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Decimal";
    gender<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "GenderType";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
    auth<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "AuthType";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    decimal<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Decimal";
    gender<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "GenderType";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
    auth<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "AuthType";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserUpdateInput: { // input type
    birthday?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    email?: string | null; // String
    gender?: NexusGenScalars['GenderType'] | null; // GenderType
    githubLogin?: string | null; // String
    id: string; // ID!
    name?: string | null; // String
    phone?: string | null; // String
    photoURL?: string | null; // String
    thumbURL?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  AuthType: any
  DateTime: any
  Decimal: any
  GenderType: any
  JSON: any
  Upload: any
}

export interface NexusGenObjects {
  DoobooStats: { // root type
    githubId: string; // String!
    json: NexusGenRootTypes['PluginJSON']; // PluginJSON!
    plugin: NexusGenRootTypes['Plugin']; // Plugin!
    pluginStats: NexusGenRootTypes['PluginStats']; // PluginStats!
    score: number; // Int!
  }
  Image: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // ID
    imageUrl?: string | null; // String
    thumbUrl?: string | null; // String
    thumbUrlHigh?: string | null; // String
  }
  Language: { // root type
    color?: string | null; // String
    name?: string | null; // String
    size?: number | null; // Int
  }
  Mutation: {};
  Newsletter: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // ID
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Plugin: { // root type
    apiURL: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id: string; // ID!
    json?: NexusGenScalars['JSON'] | null; // JSON
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  PluginJSON: { // root type
    avatarUrl?: string | null; // String
    bio?: string | null; // String
    languages: NexusGenRootTypes['Language'][]; // [Language!]!
    login: string; // String!
    score?: number | null; // Int
  }
  PluginStats: { // root type
    earth: NexusGenRootTypes['Stats']; // Stats!
    fire: NexusGenRootTypes['Stats']; // Stats!
    gold: NexusGenRootTypes['Stats']; // Stats!
    person: NexusGenRootTypes['Stats']; // Stats!
    tree: NexusGenRootTypes['Stats']; // Stats!
    water: NexusGenRootTypes['Stats']; // Stats!
  }
  Query: {};
  Stats: { // root type
    description?: string | null; // String
    icon?: string | null; // String
    id?: string | null; // ID
    name: string; // String!
    score?: NexusGenScalars['Decimal'] | null; // Decimal
    statsElements?: NexusGenScalars['JSON'] | null; // JSON
  }
  Tier: { // root type
    description?: string | null; // String
    icon?: string | null; // String
    id: string; // ID!
    name: string; // String!
    score?: NexusGenScalars['Decimal'] | null; // Decimal
  }
  Trophy: { // root type
    id: string; // ID!
    points: number; // Int!
    score: NexusGenScalars['Decimal']; // Decimal!
    type: string; // String!
  }
  User: { // root type
    birthday?: NexusGenScalars['DateTime'] | null; // DateTime
    blog?: string | null; // String
    certified?: boolean | null; // Boolean
    company?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    email?: string | null; // String
    gender?: NexusGenScalars['GenderType'] | null; // GenderType
    githubLogin?: string | null; // String
    githubURL?: string | null; // String
    id: string; // ID!
    locale?: string | null; // String
    location?: string | null; // String
    name?: string | null; // String
    phone?: string | null; // String
    twitter?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserPlugin: { // root type
    avatarUrl?: string | null; // String
    certificationNo?: number | null; // Int
    certifiedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    githubId: string; // String!
    json?: NexusGenScalars['JSON'] | null; // JSON
    login: string; // ID!
    score: number; // Int!
    userName?: string | null; // String
    viewCount?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  DoobooStats: { // field return type
    githubId: string; // String!
    json: NexusGenRootTypes['PluginJSON']; // PluginJSON!
    plugin: NexusGenRootTypes['Plugin']; // Plugin!
    pluginStats: NexusGenRootTypes['PluginStats']; // PluginStats!
    score: number; // Int!
  }
  Image: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // ID
    imageUrl: string | null; // String
    thumbUrl: string | null; // String
    thumbUrlHigh: string | null; // String
  }
  Language: { // field return type
    color: string | null; // String
    name: string | null; // String
    size: number | null; // Int
  }
  Mutation: { // field return type
    updateDoobooGithub: NexusGenRootTypes['DoobooStats'] | null; // DoobooStats
  }
  Newsletter: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt: NexusGenScalars['DateTime'] | null; // DateTime
    email: string | null; // ID
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Plugin: { // field return type
    apiURL: string; // String!
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    id: string; // ID!
    json: NexusGenScalars['JSON'] | null; // JSON
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    userPlugins: Array<NexusGenRootTypes['UserPlugin'] | null> | null; // [UserPlugin]
  }
  PluginJSON: { // field return type
    avatarUrl: string | null; // String
    bio: string | null; // String
    languages: NexusGenRootTypes['Language'][]; // [Language!]!
    login: string; // String!
    score: number | null; // Int
  }
  PluginStats: { // field return type
    earth: NexusGenRootTypes['Stats']; // Stats!
    fire: NexusGenRootTypes['Stats']; // Stats!
    gold: NexusGenRootTypes['Stats']; // Stats!
    person: NexusGenRootTypes['Stats']; // Stats!
    tree: NexusGenRootTypes['Stats']; // Stats!
    water: NexusGenRootTypes['Stats']; // Stats!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Stats: { // field return type
    description: string | null; // String
    icon: string | null; // String
    id: string | null; // ID
    name: string; // String!
    score: NexusGenScalars['Decimal'] | null; // Decimal
    statsElements: NexusGenScalars['JSON'] | null; // JSON
  }
  Tier: { // field return type
    description: string | null; // String
    icon: string | null; // String
    id: string; // ID!
    name: string; // String!
    score: NexusGenScalars['Decimal'] | null; // Decimal
  }
  Trophy: { // field return type
    id: string; // ID!
    points: number; // Int!
    score: NexusGenScalars['Decimal']; // Decimal!
    type: string; // String!
  }
  User: { // field return type
    birthday: NexusGenScalars['DateTime'] | null; // DateTime
    blog: string | null; // String
    certified: boolean | null; // Boolean
    company: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    email: string | null; // String
    gender: NexusGenScalars['GenderType'] | null; // GenderType
    githubLogin: string | null; // String
    githubURL: string | null; // String
    id: string; // ID!
    image: NexusGenRootTypes['Image'] | null; // Image
    locale: string | null; // String
    location: string | null; // String
    name: string | null; // String
    phone: string | null; // String
    twitter: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserPlugin: { // field return type
    avatarUrl: string | null; // String
    certificationNo: number | null; // Int
    certifiedAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    githubId: string; // String!
    json: NexusGenScalars['JSON'] | null; // JSON
    login: string; // ID!
    score: number; // Int!
    stats: Array<NexusGenRootTypes['Stats'] | null> | null; // [Stats]
    trophies: Array<NexusGenRootTypes['Trophy'] | null> | null; // [Trophy]
    userName: string | null; // String
    viewCount: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  DoobooStats: { // field return type name
    githubId: 'String'
    json: 'PluginJSON'
    plugin: 'Plugin'
    pluginStats: 'PluginStats'
    score: 'Int'
  }
  Image: { // field return type name
    createdAt: 'DateTime'
    id: 'ID'
    imageUrl: 'String'
    thumbUrl: 'String'
    thumbUrlHigh: 'String'
  }
  Language: { // field return type name
    color: 'String'
    name: 'String'
    size: 'Int'
  }
  Mutation: { // field return type name
    updateDoobooGithub: 'DoobooStats'
  }
  Newsletter: { // field return type name
    createdAt: 'DateTime'
    deletedAt: 'DateTime'
    email: 'ID'
    updatedAt: 'DateTime'
  }
  Plugin: { // field return type name
    apiURL: 'String'
    createdAt: 'DateTime'
    deletedAt: 'DateTime'
    description: 'String'
    id: 'ID'
    json: 'JSON'
    updatedAt: 'DateTime'
    userPlugins: 'UserPlugin'
  }
  PluginJSON: { // field return type name
    avatarUrl: 'String'
    bio: 'String'
    languages: 'Language'
    login: 'String'
    score: 'Int'
  }
  PluginStats: { // field return type name
    earth: 'Stats'
    fire: 'Stats'
    gold: 'Stats'
    person: 'Stats'
    tree: 'Stats'
    water: 'Stats'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Stats: { // field return type name
    description: 'String'
    icon: 'String'
    id: 'ID'
    name: 'String'
    score: 'Decimal'
    statsElements: 'JSON'
  }
  Tier: { // field return type name
    description: 'String'
    icon: 'String'
    id: 'ID'
    name: 'String'
    score: 'Decimal'
  }
  Trophy: { // field return type name
    id: 'ID'
    points: 'Int'
    score: 'Decimal'
    type: 'String'
  }
  User: { // field return type name
    birthday: 'DateTime'
    blog: 'String'
    certified: 'Boolean'
    company: 'String'
    createdAt: 'DateTime'
    deletedAt: 'DateTime'
    description: 'String'
    email: 'String'
    gender: 'GenderType'
    githubLogin: 'String'
    githubURL: 'String'
    id: 'ID'
    image: 'Image'
    locale: 'String'
    location: 'String'
    name: 'String'
    phone: 'String'
    twitter: 'String'
    updatedAt: 'DateTime'
  }
  UserPlugin: { // field return type name
    avatarUrl: 'String'
    certificationNo: 'Int'
    certifiedAt: 'DateTime'
    description: 'String'
    githubId: 'String'
    json: 'JSON'
    login: 'ID'
    score: 'Int'
    stats: 'Stats'
    trophies: 'Trophy'
    userName: 'String'
    viewCount: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    updateDoobooGithub: { // args
      login: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
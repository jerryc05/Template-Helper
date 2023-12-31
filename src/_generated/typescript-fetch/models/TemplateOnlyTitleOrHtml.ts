/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TemplateOnlyTitleOrHtml
 */
export interface TemplateOnlyTitleOrHtml {
    /**
     * 
     * @type {string}
     * @memberof TemplateOnlyTitleOrHtml
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TemplateOnlyTitleOrHtml
     */
    html?: string | null;
}

/**
 * Check if a given object implements the TemplateOnlyTitleOrHtml interface.
 */
export function instanceOfTemplateOnlyTitleOrHtml(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateOnlyTitleOrHtmlFromJSON(json: any): TemplateOnlyTitleOrHtml {
    return TemplateOnlyTitleOrHtmlFromJSONTyped(json, false);
}

export function TemplateOnlyTitleOrHtmlFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateOnlyTitleOrHtml {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'html': !exists(json, 'html') ? undefined : json['html'],
    };
}

export function TemplateOnlyTitleOrHtmlToJSON(value?: TemplateOnlyTitleOrHtml | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'html': value.html,
    };
}


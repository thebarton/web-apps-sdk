/*
*
*Copyright (c) 2012-2014 Adobe Systems Incorporated. All rights reserved.

*Permission is hereby granted, free of charge, to any person obtaining a
*copy of this software and associated documentation files (the "Software"),
*to deal in the Software without restriction, including without limitation
*the rights to use, copy, modify, merge, publish, distribute, sublicense,
*and/or sell copies of the Software, and to permit persons to whom the
*Software is furnished to do so, subject to the following conditions:
*
*The above copyright notice and this permission notice shall be included in
*all copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
*FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
*DEALINGS IN THE SOFTWARE.
*
*/
(function($) {
    /**
     * This class provides the contract which must be implemented by each concrete datasource from the sdk.
     * A datasource is a data provider which can be plugged into various components from the framework in order to
     * display the data in different layouts. Most components offered by the sdk supports rendering data from a datasource.
     *
     * Each concrete implementation might have its own supported options and it is not mandatory to provide
     * an implementation for all the methods from DataSource.
     *
     * @class  DataSource
     * @memberof BCAPI.Components.DataSources
     */
    function DataSource() { }

    /**
     * This method must be overriden by each concrete datasource in order to provide the logic for loading
     * an individual item.
     *
     * @public
     * @instance
     * @abstract
     * @method  fetch
     * @param  {Object} opts An object describing all relevant information for the fetch operation.
     * @return {Promise} A promise object which is going to be resolved with data.
     * @memberof BCAPI.Components.DataSources.DataSource
     */
    DataSource.prototype.fetch = function(opts) {
        throw new BCAPI.Components.Exceptions.NotImplementedException("fetch is not implemented.");
    };

    /**
     * This method must be overriden by each concrete datasource in order to provide the logic for loading
     * a subset of items belonging to the datasource.
     *
     * @public
     * @instance
     * @abstract
     * @method  list
     * @param  {Object} opts An object describing all relevant information for the list operation.
     * @return {Promise} A promise object which is going to be resolved with data.
     * @memberof BCAPI.Components.DataSources.DataSource
     */
    DataSource.prototype.list = function(opts) {
        throw new BCAPI.Components.Exceptions.NotImplementedException("list is not implemented.");
    };

    /**
     * This method must be overriden by each concrete datasource in order to provide the logic for adding
     * a new item to the datasource.
     *
     * @public
     * @instance
     * @abstract
     * @method  create
     * @param  {Object} opts An object describing all relevant information for the create operation.
     * @return {Promise} A promise object which is going to be resolved with data.
     * @memberof BCAPI.Components.DataSources.DataSource
     */
    DataSource.prototype.create = function(opts) {
        throw new BCAPI.Components.Exceptions.NotImplementedException("create is not implemented.");
    };

    /**
     * This method must be overriden by each concrete datasource in order to provide the logic for updating
     * an existing item from the datasource.
     *
     * @public
     * @instance
     * @abstract
     * @method  update
     * @param  {Object} opts An object describing all relevant information for the update operation.
     * @return {Promise} A promise object which is going to be resolved with data.
     * @memberof BCAPI.Components.DataSources.DataSource
     */
    DataSource.prototype.update = function(opts) {
        throw new BCAPI.Components.Exceptions.NotImplementedException("update is not implemented.");
    };

    /**
     * This method must be overriden by each concrete datasource in order to provide the logic for removing
     * an existing item from the datasource.
     *
     * @public
     * @instance
     * @abstract
     * @method  delete
     * @param  {Object} opts An object describing all relevant information for the delete operation.
     * @return {Promise} A promise object which is going to be resolved with data.
     * @memberof BCAPI.Components.DataSources.DataSource
     */
    DataSource.prototype.delete = function(opts) {
        throw new BCAPI.Components.Exceptions.NotImplementedException("delete is not implemented.");
    };

    BCAPI.Components.DataSources.DataSource = BCAPI.Components.DataSources.DataSource || DataSource;
})($);
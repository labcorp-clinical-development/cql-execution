// Generated by CoffeeScript 1.12.7
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, StatusRequest, Timing,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  DT = require('../cql-datatypes');

  CORE = require('./core');

  Element = CORE.Element;

  Resource = CORE.Resource;

  Timing = CORE.Timing;

  Period = CORE.Period;

  Parameters = CORE.Parameters;

  Coding = CORE.Coding;

  Resource = CORE.Resource;

  Range = CORE.Range;

  Quantity = CORE.Quantity;

  Attachment = CORE.Attachment;

  BackboneElement = CORE.BackboneElement;

  DomainResource = CORE.DomainResource;

  ContactPoint = CORE.ContactPoint;

  ElementDefinition = CORE.ElementDefinition;

  Extension = CORE.Extension;

  HumanName = CORE.HumanName;

  Address = CORE.Address;

  Ratio = CORE.Ratio;

  SampledData = CORE.SampledData;

  Reference = CORE.Reference;

  CodeableConcept = CORE.CodeableConcept;

  Identifier = CORE.Identifier;

  Narrative = CORE.Narrative;

  Element = CORE.Element;


  /**
  This resource provides the request and response details for the resource for which the stsatus is to be checked.
  @class StatusRequest
  @exports StatusRequest as StatusRequest
   */

  StatusRequest = (function(superClass) {
    extend(StatusRequest, superClass);

    function StatusRequest(json) {
      this.json = json;
      StatusRequest.__super__.constructor.call(this, this.json);
    }


    /**
    The Response Business Identifier.
    @returns {Array} an array of {@link Identifier} objects
     */

    StatusRequest.prototype.identifier = function() {
      var i, item, len, ref, results;
      if (this.json['identifier']) {
        ref = this.json['identifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Identifier(item));
        }
        return results;
      }
    };


    /**
    The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
    @returns {Coding}
     */

    StatusRequest.prototype.ruleset = function() {
      if (this.json['ruleset']) {
        return new Coding(this.json['ruleset']);
      }
    };


    /**
    The style (standard) and version of the original material which was converted into this resource.
    @returns {Coding}
     */

    StatusRequest.prototype.originalRuleset = function() {
      if (this.json['originalRuleset']) {
        return new Coding(this.json['originalRuleset']);
      }
    };


    /**
    The date when this resource was created.
    @returns {Array} an array of {@link Date} objects
     */

    StatusRequest.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    The Insurer who is target  of the request.
    @returns {Reference}
     */

    StatusRequest.prototype.target = function() {
      if (this.json['target']) {
        return new Reference(this.json['target']);
      }
    };


    /**
    The practitioner who is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    StatusRequest.prototype.provider = function() {
      if (this.json['provider']) {
        return new Reference(this.json['provider']);
      }
    };


    /**
    The organization which is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    StatusRequest.prototype.organization = function() {
      if (this.json['organization']) {
        return new Reference(this.json['organization']);
      }
    };


    /**
    Reference of resource to reverse.
    @returns {Reference}
     */

    StatusRequest.prototype.request = function() {
      if (this.json['request']) {
        return new Reference(this.json['request']);
      }
    };


    /**
    Reference of response to resource to reverse.
    @returns {Reference}
     */

    StatusRequest.prototype.response = function() {
      if (this.json['response']) {
        return new Reference(this.json['response']);
      }
    };

    return StatusRequest;

  })(DomainResource);

  module.exports.StatusRequest = StatusRequest;

}).call(this);

//# sourceMappingURL=statusrequest.js.map
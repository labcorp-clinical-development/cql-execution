// Generated by CoffeeScript 1.12.7
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Procedure, ProcedurePerformerComponent, ProcedureRelatedItemComponent, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  Embedded class
  @class ProcedurePerformerComponent
  @exports  ProcedurePerformerComponent as ProcedurePerformerComponent
   */

  ProcedurePerformerComponent = (function(superClass) {
    extend(ProcedurePerformerComponent, superClass);

    function ProcedurePerformerComponent(json) {
      this.json = json;
      ProcedurePerformerComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The practitioner who was involved in the procedure.
    @returns {Reference}
     */

    ProcedurePerformerComponent.prototype.person = function() {
      if (this.json['person']) {
        return new Reference(this.json['person']);
      }
    };


    /**
    E.g. surgeon, anaethetist, endoscopist.
    @returns {CodeableConcept}
     */

    ProcedurePerformerComponent.prototype.role = function() {
      if (this.json['role']) {
        return new CodeableConcept(this.json['role']);
      }
    };

    return ProcedurePerformerComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class ProcedureRelatedItemComponent
  @exports  ProcedureRelatedItemComponent as ProcedureRelatedItemComponent
   */

  ProcedureRelatedItemComponent = (function(superClass) {
    extend(ProcedureRelatedItemComponent, superClass);

    function ProcedureRelatedItemComponent(json) {
      this.json = json;
      ProcedureRelatedItemComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The nature of the relationship.
    @returns {Array} an array of {@link String} objects
     */

    ProcedureRelatedItemComponent.prototype.type = function() {
      return this.json['type'];
    };


    /**
    The related item - e.g. a procedure.
    @returns {Reference}
     */

    ProcedureRelatedItemComponent.prototype.target = function() {
      if (this.json['target']) {
        return new Reference(this.json['target']);
      }
    };

    return ProcedureRelatedItemComponent;

  })(BackboneElement);


  /**
  An action that is performed on a patient. This can be a physical 'thing' like an operation, or less invasive like counseling or hypnotherapy.
  @class Procedure
  @exports Procedure as Procedure
   */

  Procedure = (function(superClass) {
    extend(Procedure, superClass);

    function Procedure(json) {
      this.json = json;
      Procedure.__super__.constructor.call(this, this.json);
    }


    /**
    This records identifiers associated with this procedure that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
    @returns {Array} an array of {@link Identifier} objects
     */

    Procedure.prototype.identifier = function() {
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
    The person on whom the procedure was performed.
    @returns {Reference}
     */

    Procedure.prototype.patient = function() {
      if (this.json['patient']) {
        return new Reference(this.json['patient']);
      }
    };


    /**
    The specific procedure that is performed. Use text if the exact nature of the procedure can't be coded.
    @returns {CodeableConcept}
     */

    Procedure.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    Procedure.prototype.bodySite = function() {
      var i, item, len, ref, results;
      if (this.json['bodySite']) {
        ref = this.json['bodySite'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    Procedure.prototype.indication = function() {
      var i, item, len, ref, results;
      if (this.json['indication']) {
        ref = this.json['indication'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Limited to 'real' people rather than equipment.
    @returns {Array} an array of {@link ProcedurePerformerComponent} objects
     */

    Procedure.prototype.performer = function() {
      var i, item, len, ref, results;
      if (this.json['performer']) {
        ref = this.json['performer'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ProcedurePerformerComponent(item));
        }
        return results;
      }
    };


    /**
    The dates over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
    @returns {Period}
     */

    Procedure.prototype.date = function() {
      if (this.json['date']) {
        return new Period(this.json['date']);
      }
    };


    /**
    The encounter during which the procedure was performed.
    @returns {Reference}
     */

    Procedure.prototype.encounter = function() {
      if (this.json['encounter']) {
        return new Reference(this.json['encounter']);
      }
    };


    /**
    What was the outcome of the procedure - did it resolve reasons why the procedure was performed?.
    @returns {Array} an array of {@link String} objects
     */

    Procedure.prototype.outcome = function() {
      return this.json['outcome'];
    };


    /**
    This could be a histology result. There could potentially be multiple reports - e.g. if this was a procedure that made multiple biopsies.
    @returns {Array} an array of {@link Reference} objects
     */

    Procedure.prototype.report = function() {
      var i, item, len, ref, results;
      if (this.json['report']) {
        ref = this.json['report'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Reference(item));
        }
        return results;
      }
    };


    /**
    Any complications that occurred during the procedure, or in the immediate post-operative period. These are generally tracked separately from the notes, which typically will describe the procedure itself rather than any 'post procedure' issues.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    Procedure.prototype.complication = function() {
      var i, item, len, ref, results;
      if (this.json['complication']) {
        ref = this.json['complication'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or potentially could be more complex in which case the CarePlan resource can be used.
    @returns {Array} an array of {@link String} objects
     */

    Procedure.prototype.followUp = function() {
      return this.json['followUp'];
    };


    /**
    Procedures may be related to other items such as procedures or medications. For example treating wound dehiscence following a previous procedure.
    @returns {Array} an array of {@link ProcedureRelatedItemComponent} objects
     */

    Procedure.prototype.relatedItem = function() {
      var i, item, len, ref, results;
      if (this.json['relatedItem']) {
        ref = this.json['relatedItem'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ProcedureRelatedItemComponent(item));
        }
        return results;
      }
    };


    /**
    Any other notes about the procedure - e.g. the operative notes.
    @returns {Array} an array of {@link String} objects
     */

    Procedure.prototype.notes = function() {
      return this.json['notes'];
    };

    return Procedure;

  })(DomainResource);

  module.exports.Procedure = Procedure;

}).call(this);

//# sourceMappingURL=procedure.js.map
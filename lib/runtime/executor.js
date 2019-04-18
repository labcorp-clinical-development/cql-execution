// Generated by CoffeeScript 1.12.7
(function() {
  var Executor, PatientContext, PopulationContext, Results, ref;

  module.exports.Executor = Executor = (function() {
    function Executor(library, codeService, parameters) {
      this.library = library;
      this.codeService = codeService;
      this.parameters = parameters;
    }

    Executor.prototype.withLibrary = function(lib) {
      this.library = lib;
      return this;
    };

    Executor.prototype.withParameters = function(params) {
      this.parameters = params != null ? params : {};
      return this;
    };

    Executor.prototype.withCodeService = function(cs) {
      this.codeService = cs;
      return this;
    };

    Executor.prototype.exec_expression = function(expression, patientSource) {
      var expr, p, patient_ctx, r;
      Results(r = new Results());
      expr = this.library.expressions[expression];
      while (expr && (p = patientSource.currentPatient())) {
        patient_ctx = new PatientContext(this.library, p, this.codeService, this.parameters);
        r.recordPatientResult(patient_ctx, expression, expr.execute(patient_ctx));
        patientSource.nextPatient();
      }
      return r;
    };

    Executor.prototype.exec = function(patientSource, executionDateTime) {
      var expr, key, popContext, r, ref;
      Results(r = this.exec_patient_context(patientSource, executionDateTime));
      popContext = new PopulationContext(this.library, r, this.codeService, this.parameters);
      ref = this.library.expressions;
      for (key in ref) {
        expr = ref[key];
        if (expr.context === "Population") {
          r.recordPopulationResult(key, expr.exec(popContext));
        }
      }
      return r;
    };

    Executor.prototype.exec_patient_context = function(patientSource, executionDateTime) {
      var expr, key, p, patient_ctx, r, ref;
      Results(r = new Results());
      while (p = patientSource.currentPatient()) {
        patient_ctx = new PatientContext(this.library, p, this.codeService, this.parameters, executionDateTime);
        ref = this.library.expressions;
        for (key in ref) {
          expr = ref[key];
          if (expr.context === "Patient") {
            r.recordPatientResult(patient_ctx, key, expr.execute(patient_ctx));
          }
        }
        patientSource.nextPatient();
      }
      return r;
    };

    return Executor;

  })();

  Results = require('./results').Results;

  ref = require('./context'), PopulationContext = ref.PopulationContext, PatientContext = ref.PatientContext;

}).call(this);

//# sourceMappingURL=executor.js.map
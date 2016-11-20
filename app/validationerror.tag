<validationerror>
  <div class="alert alert-danger alert-dismissible fade in mt-0 mb-0" role="alert" each={ error, i in this.errors }>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>Oho!</strong> { error }
  </div>

  <script>
    this.errors = opts.errors;
    opts.errors = [];
  </script>
</validationerror>
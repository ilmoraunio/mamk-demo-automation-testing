<companyform>
  <form onsubmit={ submit }>
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="ytunnus-addon">Y-tunnus</span>
      <input type="text" class="form-control" name="ytunnus" aria-describedby="ytunnus-addon" placeholder="Voi esimerkiksi olla 1234567-8" />
      <span class="input-group-btn">
        <input class="btn btn-secondary" type="submit" value="Lisää" />
      </span>
    </div>
  </form>

  submit(e) {
    try {
      if (this.ytunnus.value && this.ytunnus.value.trim()) {
        opts.companyService.add({ ytunnus: this.ytunnus.value.trim() });
        riot.update();
        this.ytunnus.value = "";
      }
    } catch (exception) {
      App.errors.push(exception.message);
    } finally {
      riot.update();
      return false;
    }
  }
</companyform>
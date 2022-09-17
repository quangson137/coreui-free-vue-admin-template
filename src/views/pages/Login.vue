<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="7">
          <CCardGroup>
            <CCard
              class="text-success info py-5"
              variant="'outline"
              style="width: 44%"
            >
              <CCardBody class="text-center">
                <div>
                  <h1>Citigo Merchant Account</h1>
                  <GoogleLogin :callback="googleLoginCallback">
                    <CButton
                      color="info"
                      variant="outline"
                      size="lg"
                      class="px-8"
                    >
                      Login with your Citigo Account
                    </CButton>
                  </GoogleLogin>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    async googleLoginCallback(response) {
      localStorage.setItem('jwt', response.credential)
      this.$router.push('/')
    },
  },
}
</script>

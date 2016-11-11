from django.conf.urls import url

from .api import ListApi, CardApi

urlpatterns = [
    url(r'^list$', ListApi.as_view()),
    url(r'^cards$', CardApi.as_view())
]

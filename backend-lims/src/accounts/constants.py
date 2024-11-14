from django.db import models


# ***** ROLE *****
class RoleTypes(models.IntegerChoices):
    ADMIN = 1, "Admin"
    TECHNICIAN = 2, "Technician"
    PATHOLOGIST = 3, "Pathologist"
    GUEST = 4, "Guest"


# ***** SUBSCRIPTION TYPES *****
class SubscriptionTypes(models.IntegerChoices):
    BASIC = 1, "Basic"
    PRO = 2, "Pro"

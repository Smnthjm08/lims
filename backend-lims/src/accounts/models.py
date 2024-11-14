from django.db import models
from django.contrib.auth.models import AbstractUser
from .constants import *

# adding unique to needed columns is pending
# need more proper design for the models and specifying the meta class


# User model using AbstractUser for authentication
class User(AbstractUser):
    role = models.ManyToManyField(
        "accounts.Role", related_name="user_roles", blank=True
    )

    # Overriding the related_name for groups and user_permissions to avoid conflicts
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="accounts_user_set",
        blank=True,
        help_text="The groups this user belongs to.",
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="accounts_user_permissions",
        blank=True,
        help_text="Specific permissions for this user.",
    )

    def __str__(self):
        return self.username


# User details model, linked to the user
class UserDetail(models.Model):
    user = models.OneToOneField(User, related_name="details", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(
        upload_to="uploads/profile_pictures", blank=True, null=True
    )

    def __str__(self):
        return f"{self.user.username}'s Details"


# User roles model, linked to user
class Role(models.Model):
    name = models.PositiveSmallIntegerField(
        choices=RoleTypes.choices, blank=True, null=True
    )
    permissions = models.ManyToManyField("auth.Permission", blank=True)

    def __str__(self):
        return RoleTypes(self.name).label


# Subscription model
class Subscription(models.Model):
    subscription_type = models.PositiveSmallIntegerField(
        choices=SubscriptionTypes.choices, blank=True, null=True
    )

    def __str__(self):
        return SubscriptionTypes(self.subscription_type).label


# Organisation model, linked to user and subscription
class Organisation(models.Model):
    org_name = models.CharField(max_length=255)
    org_logo = models.ImageField(upload_to="uploads/org_logo", blank=True, null=True)
    description = models.TextField(max_length=255, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.TextField(blank=True, null=True)
    country = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    pincode = models.CharField(max_length=10)
    phone_no = models.CharField(max_length=20, null=True, blank=True)
    org_email = models.EmailField(null=True, blank=True)
    created_by = models.ForeignKey(
        User, related_name="user_org", on_delete=models.CASCADE
    )
    subscription = models.ForeignKey(
        Subscription, related_name="organisations", on_delete=models.SET_NULL, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.org_name
